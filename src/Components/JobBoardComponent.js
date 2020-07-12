import React from "react";

export default function JobBoardComponent({ job, handleclick }) {
  const {
    logo,
    company,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
    featured,
    newjob,
  } = job;
  const skills = [role, level, ...languages, ...tools];

  return (
    <div
      className={`flex flex-col bg-white shadow-xl my-10 m-6 p-6 ${
        featured && "border-l-2 border-solid border-teal-500"
      } sm:flex-row`}
    >
      <div>
        <img
          className="-mt-10 w-20 h-20 sm:mt-0 h-24 w-24"
          src={logo}
          alt="company"
        />
      </div>
      <div className="ml-4 flex-col justify-between">
        <h3 className="text-teal-500 ">
          {company}
          {newjob && (
            <span className="m-2 rounded-full bg-black text-white p-2 font-bold">
              New
            </span>
          )}
          {featured && (
            <span className="m-2 rounded-full bg-teal-300 text-white p-2 font-bold">
              Featured
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl my-4">{position}</h2>
        <p className="text-gray-500">
          {postedAt} · {contract} · {location}
        </p>
      </div>
      <div className="flex flex-wrap justify-start pt-4  mt-4 border-t-2 border-gray-300 border-solid sm:border-none ml-auto pt-0 mt-0 p-4">
        {skills.map((item, index) => (
          <span
            onClick={() => handleclick(item)}
            className="text-teal-500 m-1  p-2 bg-teal-100 rounded"
            key={index}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
