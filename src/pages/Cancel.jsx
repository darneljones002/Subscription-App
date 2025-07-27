export default function Cancel() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-100 text-red-900">
      <h1 className="text-4xl font-bold mb-4">Payment Canceled</h1>
      <p className="text-lg">Your checkout was canceled. You can try again anytime.</p>
    </div>
  );
}
