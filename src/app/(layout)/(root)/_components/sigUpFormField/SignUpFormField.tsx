"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  SIGN_UP_ROLE,
  SignUpInputConstants,
} from "@/app/(layout)/(root)/_constants/signUpConstants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  id: SignUpInputConstants;
  inputType?: string;
}

function SignUpFormField({ id, inputType = "text" }: Props) {
  return (
    <FormField
      name={id.id}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{id.label}</FormLabel>
          <FormControl>
            {id.id != SIGN_UP_ROLE.id ? (
              <Input type={inputType} placeholder={id.placeholder} {...field} />
            ) : (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="역할을 선택해주세요" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="admin">관리자</SelectItem>
                  <SelectItem value="user">일반 사용자</SelectItem>
                </SelectContent>
              </Select>
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default SignUpFormField;
