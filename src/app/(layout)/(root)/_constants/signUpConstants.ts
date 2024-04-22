export type SignUpInputConstants = {
  id: string;
  label: string;
  placeholder?: string;
  inputType?: string;
};

export const SIGN_UP_NAME: SignUpInputConstants = {
  id: "name",
  label: "이름",
  placeholder: "홍길동",
  inputType: "text",
};
export const SIGN_UP_EMAIL: SignUpInputConstants = {
  id: "email",
  label: "이메일",
  placeholder: "hello@sparta-devcamp.com",
  inputType: "text",
};
export const SIGN_UP_PHONE: SignUpInputConstants = {
  id: "phone",
  label: "연락처",
  placeholder: "01000000000",
  inputType: "text",
};
export const SIGN_UP_ROLE: SignUpInputConstants = { id: "role", label: "역할" };
export const SIGN_UP_PASSWORD: SignUpInputConstants = {
  id: "password",
  label: "비밀번호",
  inputType: "password",
};

export const SIGN_UP_PASSWORD_CONFIRM: SignUpInputConstants = {
  id: "passwordConfirm",
  label: "비밀번호 확인",
  inputType: "password",
};
