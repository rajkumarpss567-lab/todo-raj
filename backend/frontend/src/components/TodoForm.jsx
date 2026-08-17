import { useState, useRef } from 'react';

export default function TodoForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef(null);

  const handlePaste = async (e) => {
    const items = e.clipboardData?.items;
    if (!items) return;

    for (const item of items) {
      if (item.type.startsWith('image/')) {
        e.preventDefault();
        const file = item.getAsFile();
        if (file) {
          await handleImageFile(file);
        }
      }
    }
  };

  const handleFileSelect = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    for (const file of files) {
      if (file.type.startsWith('image/')) {
        await handleImageFile(file);
      }
    }
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleImageFile = async (file) => {
    try {
      setUploadError('');

      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setUploadError('Image size must be less than 5MB');
        return;
      }

      // Convert to base64
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target.result;
        setAttachments(prev => [...prev, {
          name: file.name,
          type: file.type,
          data: base64,
          size: file.size
        }]);
      };
      reader.onerror = () => {
        setUploadError('Failed to read image file');
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error handling image:', error);
      setUploadError('Attachment failed: ' + error.message);
    }
  };

  const removeAttachment = (index) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    setSubmitting(true);
    try {
      await onSubmit({
        title: title.trim(),
        description: description.trim(),
        completed: false,
        attachments: attachments
      });
      setTitle('');
      setDescription('');
      setAttachments([]);
      setUploadError('');
    } catch (error) {
      console.error('Submit error:', error);
      setUploadError('Failed to create todo');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="todo-form-group">
        <input
          type="text"
          className="todo-form-input todo-form-title-input"
          placeholder="✓ What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onPaste={handlePaste}
          disabled={submitting}
          autoFocus
        />
      </div>
      <div className="todo-form-group">
        <input
          type="text"
          className="todo-form-input todo-form-desc-input"
          placeholder="+ Add a description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onPaste={handlePaste}
          disabled={submitting}
        />
      </div>

      {/* File upload button */}
      <div className="todo-form-actions">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept="image/*"
          multiple
          style={{ display: 'none' }}
        />
        <button
          type="button"
          className="attachment-btn"
          onClick={() => fileInputRef.current?.click()}
          disabled={submitting}
          title="Attach image (or paste)"
        >
          📎 Attach Image
        </button>
      </div>

      {/* Error message */}
      {uploadError && (
        <div className="upload-error">{uploadError}</div>
      )}

      {/* Image previews */}
      {attachments.length > 0 && (
        <div className="attachments-preview">
          {attachments.map((attachment, index) => (
            <div key={index} className="attachment-item">
              <img src={attachment.data} alt={attachment.name} />
              <button
                type="button"
                className="remove-attachment"
                onClick={() => removeAttachment(index)}
                title="Remove image"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      <button type="submit" className="todo-form-submit" disabled={submitting || !title.trim()}>
        <span className="submit-icon">+</span>
        {submitting ? 'Adding...' : 'Add Todo'}
      </button>
    </form>
  );
}
