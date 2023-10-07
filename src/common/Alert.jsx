import { XCircleIcon } from '@heroicons/react/20/solid';

const Alert = ({ alert, handleClose }) => {
  if (alert && alert?.autoClose) {
    setTimeout(() => {
      handleClose();
    }, 9000);
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const isSuccess = alert.type === 'success';

  return (
    <>
      {alert?.active && (

        <div x-data className={classNames(isSuccess ? `bg-green-400` : `bg-red-300`, 'p-4 w-full rounded mb-8')}>
          <div className="flex items-center space-x-3">
            <div className="flex-1 leading-tight text-sm text-black font-medium">{alert.message}</div>
            <button type="button">
              <XCircleIcon className="w-7 h-7 text-gray-700" onClick={handleClose} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
