import { useId } from "react";

//-----------------------------------------------------------------------------
// Skill Icons Properties

interface SkillIconProps {
  id?: string;
  src: string;
  alt: string;
  title?: string;
};




//------------------------------------------------------------------------------
// Skill Icons - Component

export function SkillIcon({ id, src, alt, title}: SkillIconProps) {
    const generatedId = useId();
    return(
      <img
        id={id ?? generatedId }
        src={src}
        alt={alt}
        title={title}
        className="max-w-[10rem] max-h-[5rem]"
      />
    );
}
