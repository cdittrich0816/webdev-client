"use client";

const hello = () => {
  alert("Hello World!");
};

const helloChris = () => {
  alert("Hi, I'm Chris saying hello from Miami!");
};

export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button
        type="button"
        onClick={hello}
        id="wd-onclick-hello"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Hello
      </button>
      <button
        type="button"
        onClick={helloChris}
        id="wd-onclick-chris"
        className="ms-2 rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Hello Chris
      </button>
      <hr />
    </div>
  );
}
