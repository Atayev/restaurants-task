type Props = {
  message?: string;
};

const ErrorMessage = ({ message }: Props) => {
  return (
    <div className="min-h-[75vh] flex justify-center items-center">
      <p className="text-red-500 text-center text-xl">{message}</p>
    </div>
  );
};

export default ErrorMessage;
