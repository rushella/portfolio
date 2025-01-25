import { IconType } from "react-icons";
import { SectionItemValue } from "./consts";

type SectionProps = {
  code: string;
  name: string;
  items: SectionItemValue[];
  className: string;
};

function Section({code, name, items, className}: SectionProps) {
  return (
    <section className={`flex ${className} my-10`}>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-2xl">{name}</h1>
        {
          items.map((val, idx) => {
            return (
              <SectionItem
                key={code + idx}
                title={val.title}
                desc={val.desc}
                href={val.href}
                iconType={val.iconType}
              />
            );
          })
        }
      </div>
    </section>
  )
}

type SectionItemProps = {
  href: string;
  iconType: IconType;
  title: string,
  desc: string
};

function SectionItem({ href, iconType: Icon, title, desc}: SectionItemProps) {
  return (
    <a
      className="flex flex-row gap-4 p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800/90 transition-all duration-500"
      href={href}
    >
      <Icon className="flex h-12 w-12 text-zinc-100"/>
      <div className="flex flex-col">
        <div className="flex">{title}</div>
        <div className="flex text-zinc-300/75">{desc}</div>
      </div>
    </a>
  );
}

export default Section;