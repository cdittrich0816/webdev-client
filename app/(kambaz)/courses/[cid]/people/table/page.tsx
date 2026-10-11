import { FaUserCircle } from "react-icons/fa";

const people = [
  ["Tony Stark", "001234561S", "S101", "STUDENT", "2020-10-01", "10:21:32"],
  ["Bruce Wayne", "001234562S", "S101", "STUDENT", "2020-11-02", "23:32:23"],
  ["Steve Rogers", "001234563S", "S101", "STUDENT", "2020-10-02", "13:21:32"],
  ["Natasha Romanoff", "001234564S", "S101", "TA", "2020-11-05", "11:22:33"],
  ["Peter Parker", "001234565S", "S102", "STUDENT", "2020-11-08", "08:15:10"],
  ["Diana Prince", "001234566S", "S102", "STUDENT", "2020-11-09", "14:02:47"],
  ["Clark Kent", "001234567S", "S102", "FACULTY", "2020-11-10", "19:44:05"],
];

export default function PeopleTable() {
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {people.map(([name, login, section, role, last, total]) => (
            <tr key={login} className="odd:bg-neutral-50">
              <td className="p-2 text-nowrap">
                <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                {name}
              </td>
              <td className="p-2">{login}</td>
              <td className="p-2">{section}</td>
              <td className="p-2">{role}</td>
              <td className="p-2">{last}</td>
              <td className="p-2">{total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
