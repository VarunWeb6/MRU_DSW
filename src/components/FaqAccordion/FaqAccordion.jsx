import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>These questions and answers cover important aspects of student welfare and would help inform students about available support services.</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>What services does the Student Welfare Department provide?</Accordion.Header>
                    <Accordion.Body>
                    The Student Welfare Department offers a range of services designed to support students' academic, emotional, and social well-being. This includes mental health counseling, financial aid guidance, career counseling, student mentorship programs, and assistance with housing and accommodation. We also provide resources for students with disabilities and help in resolving any issues related to student rights and responsibilities.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>How can I access mental health support services?</Accordion.Header>
                    <Accordion.Body>
                    Students can access mental health support by booking an appointment through the university's counseling services portal or by visiting the Student Welfare Department directly. We offer both one-on-one counseling sessions and group therapy options, as well as workshops on stress management, mindfulness, and emotional well-being. In case of emergencies, we also provide crisis intervention services.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>What should I do if I'm facing financial difficulties during my studies?</Accordion.Header>
                    <Accordion.Body>
                    If you are experiencing financial difficulties, the Student Welfare Department can assist you in exploring various financial aid options. This includes scholarships, bursaries, student loans, and emergency grants. We also provide budgeting advice and connect students with part-time job opportunities on and off-campus. Students in need should reach out to the financial aid office for personalized assistance.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>How does the university support students with disabilities?</Accordion.Header>
                    <Accordion.Body>
                    Our university is committed to creating an inclusive environment for all students. The Student Welfare Department works closely with the Accessibility Services office to provide accommodations such as extended exam time, note-taking assistance, adaptive technologies, and accessible housing. Students with disabilities are encouraged to register with the Accessibility Services team to ensure they receive the support they need to thrive academically and socially.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;