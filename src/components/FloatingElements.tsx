
export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-600/10 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-teal-600/10 rounded-lg rotate-45 animate-bounce delay-1000"></div>
      <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-purple-600/15 rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-60 right-1/3 w-8 h-8 bg-teal-600/15 rounded-lg animate-bounce delay-2000"></div>
      <div className="absolute top-1/2 left-5 w-6 h-6 bg-purple-600/20 rounded-full animate-pulse delay-1500"></div>
      <div className="absolute top-1/3 right-10 w-10 h-10 bg-teal-600/10 rounded-lg rotate-12 animate-bounce"></div>
      
      {/* Larger background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-600/5 to-teal-600/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-teal-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
    </div>
  );
};
