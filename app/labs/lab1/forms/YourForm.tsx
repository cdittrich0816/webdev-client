export default function YourForm() {
  return (
    <form id="wd-your-form" onSubmit={(event) => event.preventDefault()}>
      <h4>Student Profile</h4>

      <label htmlFor="wd-your-first-name">First name:</label>
      <input id="wd-your-first-name" defaultValue="Chris" />
      <br />
      <label htmlFor="wd-your-last-name">Last name:</label>
      <input id="wd-your-last-name" defaultValue="Dittrich" />
      <br />
      <label htmlFor="wd-your-student-id">Student ID:</label>
      <input type="password" id="wd-your-student-id" />
      <br />

      <label htmlFor="wd-your-bio">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={40}
        rows={4}
        defaultValue="I want to learn to build and deploy full stack web applications."
      />
      <br />

      <label>Class standing:</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-undergrad" />
      <label htmlFor="wd-your-undergrad">Undergraduate</label>
      <br />
      <input
        type="radio"
        name="your-standing"
        id="wd-your-graduate"
        defaultChecked
      />
      <label htmlFor="wd-your-graduate">Graduate</label>
      <br />
      <label>Enrollment:</label>
      <br />
      <input
        type="radio"
        name="your-enrollment"
        id="wd-your-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-full-time">Full-time</label>
      <br />
      <input type="radio" name="your-enrollment" id="wd-your-part-time" />
      <label htmlFor="wd-your-part-time">Part-time</label>
      <br />

      <label>Interests:</label>
      <br />
      <input type="checkbox" id="wd-your-ml" defaultChecked />
      <label htmlFor="wd-your-ml">Machine Learning</label>
      <br />
      <input type="checkbox" id="wd-your-web" defaultChecked />
      <label htmlFor="wd-your-web">Web Development</label>
      <br />
      <input type="checkbox" id="wd-your-finance" />
      <label htmlFor="wd-your-finance">Finance</label>
      <br />

      <label htmlFor="wd-your-major">Major:</label>
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="IS">Information Systems</option>
      </select>
      <br />
      <label htmlFor="wd-your-topics">Topics to deepen:</label>
      <br />
      <select
        multiple
        id="wd-your-topics"
        defaultValue={["REACT", "NEXTJS"]}
      >
        <option value="REACT">React</option>
        <option value="NEXTJS">Next.js</option>
        <option value="NODE">Node.js</option>
        <option value="MONGODB">MongoDB</option>
      </select>
      <br />

      <label htmlFor="wd-your-email">School email:</label>
      <input type="email" id="wd-your-email" defaultValue="dittrich.c@northeastern.edu" />
      <br />
      <label htmlFor="wd-your-grad-year">Graduation year:</label>
      <input
        type="number"
        id="wd-your-grad-year"
        defaultValue={2027}
        min={2026}
        max={2030}
      />
      <br />
      <label htmlFor="wd-your-start-date">Program start date:</label>
      <input type="date" id="wd-your-start-date" defaultValue="2025-09-01" />
      <br />
      <label htmlFor="wd-your-excitement">Excitement (0-10):</label>
      <input
        type="range"
        id="wd-your-excitement"
        min={0}
        max={10}
        defaultValue={8}
      />
      <br />

      <button type="submit" id="wd-your-save">
        Save
      </button>
      <button type="button" id="wd-your-cancel">
        Cancel
      </button>
    </form>
  );
}
