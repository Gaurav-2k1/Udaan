import React from 'react'
import "./Teacher.css"
import teacher from "../../assets/teacher.jpg"
import { Container } from 'reactstrap'
const Teacher = () => {
    return (
        <section className='teacher'>
            {/* <Container> */}
                <div className='cloudimage'>
                    <h1>Meet Our Teachers</h1>

                </div>
                <div className='teacherrow'>
                    <div className='teacherbox'>
                        <img src={teacher} alt="" />
                        <h3>Bhbhb</h3>
                        <span>hbajshbdajsbdhbasjd jasidbahs dasuidbas bas dasdjkasda sjkajs basdisb</span>
                    </div>
                    <div className='teacherbox'>
                        <img src={teacher} alt="" />
                        <h3>Bhbhb</h3>
                        <span>hbajshbdajsbdhbasjd jasidbahs dasuidbas bas dasdjkasda sjkajs basdisb</span>
                    </div><div className='teacherbox'>
                        <img src={teacher} alt="" />
                        <h3>Bhbhb</h3>
                        <span>hbajshbdajsbdhbasjd jasidbahs dasuidbas bas dasdjkasda sjkajs basdisb</span>
                    </div>
                </div>
            {/* </Container> */}

        </section>


    )
}

export default Teacher