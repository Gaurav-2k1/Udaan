import React from 'react'
import "./Teacher.css"
import teacher from "../../assets/teacher.jpg"
const Teacher = () => {
    return (
        <section className='teacher' id='teachers'>
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

        </section>


    )
}

export default Teacher