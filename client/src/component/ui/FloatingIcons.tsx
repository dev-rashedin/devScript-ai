import { motion } from 'motion/react';
import {
  AiOutlineCode,
  AiOutlineFileText,
  AiOutlineMail,
  AiOutlineEdit,
} from 'react-icons/ai';
import emailIcon from '../../assets/email.png'
import writingIcon from '../../assets/writing.png'
import resumeIcon from '../../assets/resume.png'
import codingIcon from '../../assets/ai-coding.png'

const floatAnim = {
  animate: { y: [0, -15, 0] },
  transition: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
};

const FloatingIcons = () => {
  return (
    <div className='hidden lg:block'>
      {/* floating icons left */}
      <div className='hidden md:block absolute left-[-180px] bottom-28 space-y-12'>
        <motion.div {...floatAnim}>
          <img src={resumeIcon} alt='Email' className='w-96 h-96' />
        </motion.div>
      </div>
      <div className='hidden md:block absolute left-[-100px] -top-20 space-y-12'>
        <motion.div
          {...floatAnim}
          transition={{ ...floatAnim.transition, delay: 1 }}
        >
          <img src={writingIcon} alt='Email' className='w-36 h-36' />
        </motion.div>
      </div>

      {/* floating icons right */}
      <div className='hidden md:block absolute right-[-120px] xl:right-[-300px] top-1/4 space-y-12'>
        <motion.div {...floatAnim}>
          <img src={emailIcon} alt='Email' className='w-36 h-36' />
        </motion.div>
      </div>
      <div className='hidden md:block absolute right-[-120px] xl:right-[-180px] -top-20 space-y-12'>
        <motion.div
          {...floatAnim}
          transition={{ ...floatAnim.transition, delay: 1 }}
        >
          <img src={codingIcon} alt='Email' className='w-96 h-96' />
        </motion.div>
      </div>
    </div>
  );
}
export default FloatingIcons