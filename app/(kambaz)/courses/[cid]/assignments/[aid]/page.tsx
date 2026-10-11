import Link from "next/link";

const input = "w-full rounded border border-neutral-300 px-3 py-2";
const label = "mb-1 block font-medium";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="max-w-2xl">
      <label htmlFor="wd-name" className={label}>
        Assignment Name
      </label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" className={`${input} mb-4`} />
      <textarea
        id="wd-description"
        rows={5}
        className={`${input} mb-4`}
        defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Vercel."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[180px_1fr] sm:items-start">
        <label htmlFor="wd-points" className="sm:pt-2 sm:text-right">
          Points
        </label>
        <input id="wd-points" defaultValue={100} className={input} />

        <label htmlFor="wd-group" className="sm:pt-2 sm:text-right">
          Assignment Group
        </label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className={input}>
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>

        <label htmlFor="wd-display-grade-as" className="sm:pt-2 sm:text-right">
          Display Grade as
        </label>
        <select id="wd-display-grade-as" defaultValue="PERCENTAGE" className={input}>
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
        </select>

        <label htmlFor="wd-submission-type" className="sm:pt-2 sm:text-right">
          Submission Type
        </label>
        <div className="rounded border border-neutral-300 p-3">
          <select id="wd-submission-type" defaultValue="ONLINE" className={`${input} mb-3`}>
            <option value="ONLINE">Online</option>
            <option value="ON_PAPER">On Paper</option>
          </select>
          <div className="mb-2 font-medium">Online Entry Options</div>
          {[
            ["wd-text-entry", "Text Entry"],
            ["wd-website-url", "Website URL"],
            ["wd-media-recordings", "Media Recordings"],
            ["wd-student-annotation", "Student Annotation"],
            ["wd-file-upload", "File Uploads"],
          ].map(([id, text]) => (
            <div key={id} className="mb-1 flex items-center gap-2">
              <input type="checkbox" id={id} />
              <label htmlFor={id}>{text}</label>
            </div>
          ))}
        </div>

        <span className="sm:pt-2 sm:text-right">Assign</span>
        <div className="rounded border border-neutral-300 p-3">
          <label htmlFor="wd-assign-to" className={label}>
            Assign to
          </label>
          <input id="wd-assign-to" defaultValue="Everyone" className={`${input} mb-3`} />
          <label htmlFor="wd-due-date" className={label}>
            Due
          </label>
          <input type="date" id="wd-due-date" defaultValue="2026-05-13" className={`${input} mb-3`} />
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="wd-available-from" className={label}>
                Available from
              </label>
              <input type="date" id="wd-available-from" defaultValue="2026-05-06" className={input} />
            </div>
            <div>
              <label htmlFor="wd-available-until" className={label}>
                Until
              </label>
              <input type="date" id="wd-available-until" defaultValue="2026-05-20" className={input} />
            </div>
          </div>
        </div>
      </div>

      <hr className="my-4" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
