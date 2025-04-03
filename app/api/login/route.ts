import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Missing password"),
});

const validUser = [{ email: "test@test.com", password: "Password123" }];

export async function POST(req: NextRequest) {
  const incoming_data = await req.json();
  const parsedData = loginSchema.safeParse(incoming_data);

  if (!parsedData.success) {
    const validationErrors = parsedData.error.errors.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));

    return NextResponse.json(
      { message: "Validation failed", errors: validationErrors },
      { status: 400 }
    );
  }

  if (
    !validUser.some(
      (user) =>
        user.email === parsedData.data.email &&
        user.password === parsedData.data.password
    )
  ) {
    return NextResponse.json({ message: "Invalid password" }, { status: 401 });
  }

  return NextResponse.json({ message: "Login successful" });
}
