// src/app/organization/page.tsx

export default function OrganizationPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Hello Organization!
      </h1>
      <p className="text-slate-500">
        หากคุณเห็นข้อความนี้ แสดงว่า Routing ของ /organization
        ทำงานถูกต้องแล้วครับ
      </p>

      <div className="mt-8 p-4 bg-slate-100 rounded-lg text-sm font-mono">
        Path: src/app/organization/page.tsx
      </div>
    </div>
  );
}
