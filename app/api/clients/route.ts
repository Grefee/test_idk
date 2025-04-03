import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = [
      {
        name: "Declan Welch",
        nationality: "CZ",
        occupation: "IT",
        email: "declan.welch@pepega.com",
      },
      {
        name: "Mariah Vu",
        nationality: "CZ",
        occupation: "HR",
        email: "mariah.vu@pepega.com",
      },
      {
        name: "Miley Soto",
        nationality: "CZ",
        occupation: "LOG",
        email: "miley.soto@pepega.com",
      },
      {
        name: "Barrett Stein",
        nationality: "CZ",
        occupation: "QUA",
        email: "barret.stein@pepega.com",
      },
      {
        name: "Brycen Barajas",
        nationality: "CZ",
        occupation: "IT",
        email: "brycen.barajas@pepega.com",
      },
      {
        name: "Warren Patrick",
        nationality: "CZ",
        occupation: "MAN",
        email: "warren.patrick@pepega.com",
      },
      {
        name: "Holden Pittman",
        nationality: "CZ",
        occupation: "HR",
        email: "holden.pittman@pepega.com",
      },
      {
        name: "Miller Jarvis",
        nationality: "CZ",
        occupation: "HR",
        email: "miller.jarvis@pepega.com",
      },
    ];

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Database query error:", error);
    return NextResponse.json(
      { error: `Database query failed:${error}` },
      { status: 500 }
    );
  }
}
