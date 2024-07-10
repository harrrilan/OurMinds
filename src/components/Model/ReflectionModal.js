import React, { useState, useEffect } from 'react';
import { Button, Modal } from "react-bootstrap";
import DownArrow from "../../assets/images/arrow-down.svg";
import Tick from "../../assets/images/tick.svg";
import Delete from "../../assets/images/trash.svg";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./Modal.css";

const ReflectionModal = ({ show, handleClose, sectionTitle }) => {
    const [editorContent, setEditorContent] = useState('');

    useEffect(() => {
        if (show && sectionTitle) {
            const savedContent = localStorage.getItem(sectionTitle);
            if (savedContent) {
                setEditorContent('');
            } else {
                setEditorContent('');
            }
        }
    }, [show, sectionTitle]);

    const handleEditorChange = (value) => {
        setEditorContent(value);
    };

    const handleSave = () => {
        localStorage.setItem(sectionTitle, editorContent);
        handleClose();
    };

    const handleCancel = () => {
        handleClose();
    };

    const handleDelete = () => {
        localStorage.removeItem(sectionTitle);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleCancel} size="lg" backdrop="static" centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    <img src={DownArrow} alt='DownArrow' width={30} height={30} />
                    <span>{sectionTitle}</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ReactQuill
                    value={editorContent}
                    onChange={handleEditorChange}
                    placeholder="Today my day was ..."
                    theme="snow"
                    modules={{
                        toolbar: [
                            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                            [{ size: [] }],
                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                            ['link', 'image', 'video'],
                            ['clean']
                        ],
                    }}
                />
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between">
                <div className='delete' onClick={handleDelete}>
                    <img src={Delete} alt='delete' width={25} height={25} />
                </div>
                <div className='d-flex gap-3'>
                    <Button variant="secondary" className='cancel-btn' onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="primary" className='save-btn' onClick={handleSave}>
                        Save <img src={Tick} alt='tick' width={25} height={25} />
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default ReflectionModal;