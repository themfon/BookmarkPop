import { useState } from 'react';
import { faqData } from '../../utils/data/faqData';
import { AnimatePresence, motion } from 'framer-motion';

export default function MainFAQ() {
  const [index, setIndex] = useState(0);
  const [tuple, setTuple] = useState([null, index]);

  if (tuple[1] !== index) {
    setTuple([tuple[1], index]);
  }

  let prev = tuple[0];

  let direction = index > prev! ? ' increasing' : 'decreasing';

  return (
    <div className="text-white py-4 max-h-[700px] overflow-hidden mx-auto flex items-center justify-center flex-col">
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={index}
          initial={{ x: direction === 'increasing' ? 100 : -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          exit={{ x: direction === 'increasing' ? -100 : 100 }}

          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
        >
          <div className="bg-white rounded-md shadow-md max-w-[600px] phone:max-w-[300px] phone:h-auto max-h-[500px] p-8 mb-4">
            <h2 className="text-black font-bold mb-2">
              {faqData[index].question}
            </h2>
            <p className="text-black phone:text-sm">
              {faqData[index].response}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* create the dots here */}

      <div className="flex items-center gap-x-2">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className={` ${
              faq.id === index.toString() ? 'bg-white' : ' '
            }   h-[18px] w-[18px] border border-white rounded-[50%] cursor-pointer`}
            onClick={() => setIndex(parseInt(faq.id))}
          ></div>
        ))}
      </div>
    </div>
  );
}
