interface Props {
  children: React.ReactNode;
}

function SignUpForm({ children }: Props) {
  return <form className="relative overflow-hidden flex">{children}</form>;
}

export default SignUpForm;
