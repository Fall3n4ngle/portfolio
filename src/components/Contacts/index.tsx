"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import ContactsForm from "./ContactsForm";
import ContactsInfo from "./ContactsInfo";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.02 * index,
    },
  }),
};

export default function Contacts() {
  const { ref } = useSectionInView("Contacts", 0.5);

  return (
    <section id="contacts" ref={ref} className="mb-20 scroll-mt-24">
      <h3 className="section-title mb-14 md:mb-20">Contacts</h3>
      <div className="mx-auto flex max-w-[900px] flex-col-reverse gap-10 sm:flex-row md:gap-14">
        <motion.div
          className="mx-auto w-full max-w-[500px] sm:basis-1/2"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={1}
        >
          <ContactsForm />
        </motion.div>
        <motion.div
          className="sm:mt-7 sm:basis-1/2"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={4}
        >
          <ContactsInfo />
        </motion.div>
      </div>
    </section>
  );
}
