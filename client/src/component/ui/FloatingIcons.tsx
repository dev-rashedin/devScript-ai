import { motion } from 'motion/react';
import {
  AiOutlineCode,
  AiOutlineFileText,
  AiOutlineMail,
  AiOutlineEdit,
} from 'react-icons/ai';

const floatAnim = {
  animate: { y: [0, -15, 0] },
  transition: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
};

const FloatingIcons = () => {
  return (
    <div className='hidden lg:block'>
      {/* floating icons left */}
      <div className='hidden md:block absolute left-[-120px] top-1/3 space-y-12'>
        <motion.div {...floatAnim}>
          <AiOutlineCode size={40} className='text-primary' />
        </motion.div>
        <motion.div
          {...floatAnim}
          transition={{ ...floatAnim.transition, delay: 1 }}
        >
          <AiOutlineFileText size={40} className='text-secondary' />
        </motion.div>
      </div>

      {/* floating icons right */}
      <div className='hidden md:block absolute right-[-80px] xl:right-[-120px] top-1/4 space-y-12'>
        <motion.div {...floatAnim}>
          <AiOutlineMail size={40} className='text-accent' />
        </motion.div>
      </div>
      <div className='hidden md:block absolute right-[-120px] xl:right-[-180px] top-1/2 space-y-12'>
        <motion.div
          {...floatAnim}
          transition={{ ...floatAnim.transition, delay: 1 }}
        >
          <AiOutlineEdit size={40} className='text-primary' />
        </motion.div>
      </div>
    </div>
  );
}
export default FloatingIcons