import ContactsForm from "./ContactsForm";
import ContactsInfo from "./ContactsInfo";

export default function Contacts() {
  return (
    <section className="mb-20">
      <h3 className="section-title mb-14 md:mb-20">Contacts</h3>
      <div className="flex flex-col-reverse sm:flex-row gap-10 md:gap-14 max-w-[900px] mx-auto">
        <div className="sm:basis-1/2 max-w-[500px] mx-auto w-full">
          <ContactsForm />
        </div>
        <div className="sm:basis-1/2 sm:mt-7">
          <ContactsInfo />
        </div>
      </div>
    </section>
  );
}
