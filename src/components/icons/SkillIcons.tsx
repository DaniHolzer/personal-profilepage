
//-----------------------------------------------------------------------------
// Skill Icons Properties

interface SkillIconsProps {
  src: string;
  alt: string;
  title?: string;
};




//------------------------------------------------------------------------------
// Skill Icons - Component

export function SkillIcons({ src, alt, title}: SkillIconsProps) {
    return(
      <img
        src={src}
        alt={alt}
        title={title}
      />
    );
}
