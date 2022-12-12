import "../design/ContactStyle.css";
import {Form} from "react-bootstrap";
import React, {useState} from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody,
    ModalCloseButton, Button, FormControl, FormLabel, useDisclosure, Input} from '@chakra-ui/react'
import {FiSend as SendIcon} from "react-icons/fi";
import {HiOutlineMail as EmailIcon} from "react-icons/hi"
import {BsGoogle as GmailIcon} from "react-icons/bs";
import {ImMobile as MobileIcon} from "react-icons/im";

const defaultForm = {
    subject: "",
    email: "",
    body: ""
}

export default function Contact() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [form, setForm] = useState(defaultForm);

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    }

    const clearForm = () => {
        setForm(defaultForm);
    }

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
        <>
            <div className={'Contact'}>
                <div>
                    <div>
                        ჩვენი საკონტატქო ინფორმაცია:
                    </div>
                    <div>
                        <div className={'d-flex align-items-center p-3'}>
                            <div>
                                <GmailIcon className={'me-3'} size={40}/>
                            </div>
                            <div>
                                test@example.com
                            </div>
                        </div>
                        <div className={'d-flex align-items-center p-3'}>
                            <div>
                                <MobileIcon className={'me-3'} size={40}/>
                            </div>
                            <div>
                                 555 57 28 23
                            </div>
                        </div>
                    </div>
                </div>

                <Button
                    className={'p-3'}
                    leftIcon={<EmailIcon size={30}/>} colorScheme='teal'
                    variant='solid' onClick={onOpen}>
                    ან მოგვწერეთ აქვე
                </Button>

                <div>
                    <Modal
                        initialFocusRef={initialRef}
                        finalFocusRef={finalRef}
                        isOpen={isOpen}
                        onClose={onClose}
                        size={"3xl"}
                    >
                        <ModalOverlay/>
                        <ModalContent>
                            <ModalHeader>აკრიფეთ წერილი:</ModalHeader>
                            <ModalCloseButton/>
                            <ModalBody>
                                <Form
                                      action={"https://formspree.io/f/xyyvrvzq"}
                                      method={"POST"}
                                >

                                    <FormControl isRequired={true}>
                                        <FormLabel>თემა</FormLabel>
                                        <Input
                                            type={'text'}
                                            name={"subject"}
                                            value={form.subject}
                                            onChange={(event) => {
                                                handleChange(event)
                                            }}
                                            ref={initialRef}
                                            placeholder='აკრიფეთ თემა'
                                            required/>
                                    </FormControl>

                                    <FormControl my={4} isRequired={true}>
                                        <FormLabel>ელ-ფოსტა</FormLabel>
                                        <Input
                                            type={"email"}
                                            name={'email'}
                                            value={form.email}
                                            onChange={(event) => handleChange(event)}
                                            placeholder='აკრიფეთ მეილი'
                                            required/>
                                    </FormControl>

                                    <FormControl my={4} isRequired={true}>
                                        <FormLabel>ტექსტი</FormLabel>
                                        <Input
                                            type={'textarea'}
                                            name={'body'}
                                            value={form.body}
                                            onChange={(event) => handleChange(event)}
                                            style={{minHeight: "50px", maxHeight: "150px"}}
                                            as={"textarea"}
                                            placeholder='აკრიფეთ ტექსტი' required/>
                                    </FormControl>

                                    <div className={"d-flex justify-content-end"}>
                                        <Button type={'submit'}
                                                onSubmit={clearForm}
                                                className={'d-flex align-items-center justify-content-center'}>
                                            <div className={'me-3'}>
                                                Send
                                            </div>
                                            <SendIcon color={"blue"} size={30}/>
                                        </Button>
                                    </div>
                                </Form>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </div>
            </div>
        </>
    )
}