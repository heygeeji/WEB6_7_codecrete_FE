"use client";

import { Input } from "@/components/ui/input";
import PasswordInput from "@/components/auth/PasswordInput";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { login } from "@/lib/auth";
import { toast } from "sonner";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      await login(email, password);
      toast.success("로그인이 완료됐습니다.");
      router.push("/");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("로그인 중 오류가 발생했습니다.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="input flex flex-col gap-6">
      <Input
        placeholder="Email Address"
        className="bg-point-sub h-13"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />

      <div className="idSave flex justify-between">
        <div className="flex items-center gap-2">
          <Checkbox className="cursor-pointer" />
          <Label>아이디 저장</Label>
        </div>
        {/* TODO: 비밀번호 찾기 */}
        {/* <Link href="/sign-up" className="text-text-sub cursor-pointer hover:text-text-main">
                비밀번호를 잊으셨나요?
              </Link> */}
      </div>
      <Button
        className="signInButton cursor-pointer"
        variant="default"
        size="lg"
        asChild={false}
        onClick={handleLogin}
        disabled={loading}
      >
        로그인
      </Button>
    </div>
  );
}
