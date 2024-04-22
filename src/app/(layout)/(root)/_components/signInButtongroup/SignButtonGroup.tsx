"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Props {
  handler?: () => void;
  currentStep: number;
  prevHandler?: () => void;
}

function SignButtonGroup({ handler, currentStep, prevHandler }: Props) {
  return (
    <div className="mt-5 bottom-5">
      {currentStep === 0 ? (
        <Button type="button" onClick={handler}>
          다음 단계로 <ArrowRight size={16} />
        </Button>
      ) : (
        <>
          <Button type="button" onClick={handler}>
            계정 등록하기
          </Button>
          <Button variant="ghost" type="button" onClick={prevHandler}>
            이전 단계로
          </Button>
        </>
      )}
    </div>
  );
}

export default SignButtonGroup;
