import React, { useState } from "react";
import BoxSocial from "../../atoms/BoxSocial";
import CardLarge from "../../atoms/CardLarge";
import CardSmall from "../../atoms/CardSmall";
import Modal from "../../atoms/Modal";
import RoundedImg from "../../atoms/RoundedImg";

import {
  listIndustries,
  listProjects,
  listSkills,
} from "../../../../utils/constants";

const HeroDetail = () => {
  const [dataProject, setDataProject] = useState(undefined)

  const viewListSkills = () => {
    return listSkills.slice(0,3).map((item, i) => (
      <CardSmall
        key={i}
        img={item.icon}
        title={item.name}
        link={item.link}
      />
    ))
  }
  
  return (
    <>
      <section className="flex max-md:flex-col-reverse w-full pt-4">

        {/* KIRI */}
        <div className="w-[60%] text-left text-(--text-color-black) max-xl:w-[50%] max-md:mt-8 max-md:w-full">
          <p>Aji Banyu</p>
          <div className="flex gap-8 max-xl:flex-col">
            <div>
              <h3 className="font-barlow max-w-[370px] text-4xl leading-7 font-bold max-xl:w-[300px] max-xl:text-3xl">
                Empowering Digital Experiences Trough Frontend Developer
              </h3>
              <p className="text-md mt-4 max-w-[300px] leading-4 font-light">
                lorem20
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, eum porro ratione consequuntur vero iure. Ex voluptatem ea consequatur culpa impedit maxime voluptates. Placeat harum accusantium corrupti recusandae deleniti architecto.
                </p>
            </div>

            <div className="max-w-[200px]">
              <p className="text-sm font-bold">
                <span className="text-xl">+62K</span> Lines of Code & Counting
              </p>

              <p className="text-sm leading-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sequi sed molestiae voluptatem nisi non at omnis deserunt, totam delectus exercitationem qui. Soluta modi, illo sit cupiditate commodi quo quasi?
              </p>

              <div className="mt-1 flex">
                {listIndustries.map((item, index) => (
                  <RoundedImg key={index} src={item.icon} index={index} />
                ))}

                <RoundedImg key={1} text="MORE" index={1} />
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="mt-6">
              <button
                className="cursor-pointer rounded-full border-2 border-(--bg-secondary-cray) px-4 py-2 hover:bg-(--bg-secondary-cray)"
                onClick={() => {}}
              >
                Discover More
              </button>

              <BoxSocial/>
            </div>

            <div className="flex gap-4 max-xl:hidden">{viewListSkills()}</div>
          </div>
        </div>

        {/* KANAN */}
        <div className="flex flex-col gap-4 w-[40%] pl-4 max-xl:w[50%] max-md:mt-14 max-md:w-full">
          <div className="mt-16 hidden gap-1 text-(--text-color-black) max-xl:flex">
            {viewListSkills()}
          </div>

          {listProjects.map((item, i) => (
            <CardLarge
              key={i}
              img={item.background}
              index={i + 1}
              text={item.desc}
              title={item.title}
              tech={item.list_tech}
              onClick={() => {
                setDataProject(item);
              }}
            />
          ))}
        </div>

      </section>

      <Modal
        isOpen={dataProject}
        onClose={() => setDataProject(undefined)}
        data={dataProject}
      />
    </>
  )
}

export default HeroDetail