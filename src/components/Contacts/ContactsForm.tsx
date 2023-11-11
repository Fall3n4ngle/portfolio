export default function ContactsForm() {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="email">Message</label>
        <textarea name="email" id="email" cols={30} rows={10}></textarea>
      </div>
    </form>
  );
}
