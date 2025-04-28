export const Input = ({ className = '', ...props }) => (
  <input
    className={`block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${className}`}
    {...props}
  />
);
