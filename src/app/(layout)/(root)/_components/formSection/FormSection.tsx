interface Props {
  className?: string;
  children: React.ReactNode;
}

function FormSection({ className, children }: Props) {
  return (
    <section
      className={`transition-transform ease-in-out duration-500 transform mb-16 ${className}`}
    >
      <div className="grid w-[330px] items-center gap-4">{children}</div>
    </section>
  );
}

export default FormSection;
