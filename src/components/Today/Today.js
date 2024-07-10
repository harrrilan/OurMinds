import React, { useState, useEffect } from 'react';
import "./Today.css";
import Sparkle from "../../assets/images/sparkle.svg";
import Notification from "../../assets/images/notification.svg";
import Polly from "../../assets/images/polly.svg";
import Plus from "../../assets/images/button.svg";
import Arrow from "../../assets/images/arrow.svg";
import ReflectionModal from '../Modal/ReflectionModal';
import PromptSection from '../Prompts/PromptSection';
import { Modal } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Today = () => {
    const [showReflection, setShowReflection] = useState(false);
    const [showPrompts, setShowPrompts] = useState(false);
    const [sectionTitle, setSectionTitle] = useState('');

    const handleCloseReflection = () => setShowReflection(false);
    const handleShowReflection = (title) => {
        setSectionTitle(title);
        setShowReflection(true);
    };

    const handleClosePrompts = () => setShowPrompts(false);
    const handleShowPrompts = () => setShowPrompts(true);

    const location = useLocation();
    const selectedDate = location.state?.selectedDate;
    const currentDate = new Date();
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formattedDate = selectedDate || `${dayNames[currentDate.getDay()]} ${currentDate.getDate()} ${monthNames[currentDate.getMonth()]}`;

    useEffect(() => {
        localStorage.setItem('formattedDate', formattedDate);
    }, [formattedDate]);

    return (
        <div>
            <div id="dashboard">
                <div className='container '>
                    <div className='row mt-4'>
                        <div className='col-md-12 '>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex align-items-center'>
                                    <div className='sparkle-img'>
                                        <img src={Sparkle} alt='sparkle' />
                                    </div>
                                    <div className='d-block'>
                                        <div className='heading-content'>
                                            <h1>Good evening, Ophelia!</h1>
                                        </div>
                                        <div className='date'>
                                            <p>{formattedDate}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img src={Notification} alt='notification' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='s-section decor-img'>
                        <div className='row mt-4'>
                            <div className='col-md-12 d-flex justify-content-between'>
                                <div className='d-flex gap-3'>
                                    <div className='sparkle-img'>
                                        <img src={Polly} alt='sparkle' />
                                    </div>
                                    <div className='text-start'>
                                        <p className='prompt-content mb-1'>PROMPTS</p>
                                        <p className='prompts-text mb-1'>
                                            There are all prompts you’ve selected to follow
                                        </p>
                                    </div>
                                </div>

                                <div className='text-end' onClick={handleShowPrompts}>
                                    <img src={Plus} alt='plus' width={35} height={35} />
                                </div>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-md-12 d-flex justify-content-between gap-3'>
                                <div className='today-section' onClick={() => handleShowReflection("Today’s reflection")}>
                                    <div className='d-flex'>
                                        <div className='arrow-img'>
                                            <img src={Arrow} alt='Arrow' />
                                        </div>
                                        <div className='reflection'>
                                            <p>  Today’s reflection</p>
                                        </div>
                                    </div>
                                    <div className='input-text mt-2'>
                                        <input type='text' placeholder='' />
                                    </div>
                                </div>
                                <div className='today-section' onClick={() => handleShowReflection("Mindfulness Moments")}>
                                    <div className='d-flex'>
                                        <div className='arrow-img'>
                                            <img src={Arrow} alt='Arrow' />
                                        </div>
                                        <div className='mindfulness'>
                                            <p>  Mindfulness Moments</p>
                                        </div>
                                    </div>
                                    <div className='input-text mt-2'>
                                        <input type='text' placeholder='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-md-12'>
                                <div className='today-section' onClick={() => handleShowReflection("Gratitude Log")}>
                                    <div className='d-flex'>
                                        <div className='arrow-img'>
                                            <img src={Arrow} alt='Arrow' />
                                        </div>
                                        <div className='reflection'>
                                            <p> Gratitude Log</p>
                                        </div>
                                    </div>
                                    <div className='input-texts mt-2'>
                                        <input type='text' placeholder='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ReflectionModal show={showReflection} handleClose={handleCloseReflection} sectionTitle={sectionTitle} />
                <Modal show={showPrompts} onHide={handleClosePrompts} centered className='prompt-modal-today'>
                    <Modal.Header closeButton className='close-prmpt-modal'>
                    </Modal.Header>
                    <Modal.Body>
                        <PromptSection />
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
};

export default Today;
