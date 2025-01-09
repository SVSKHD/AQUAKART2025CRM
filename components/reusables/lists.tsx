const AquaLists = ({ title, description, number }: { title: string; description: string; number: number }) => {
    return (
      <li className="flex items-start space-x-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300">
        <span className="text-lg font-bold text-gray-700 dark:text-gray-300">{number}.</span>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
        </div>
      </li>
    );
  };
  
  export default AquaLists;