import React, {useState, useEffect} from 'react';
import Informacao from './Informacao';
import Ocorrencia2 from './Ocorrencia2';
import Consulta from './Consulta';

interface LeftComponentProps {
  onButtonClick: (componentName: string) => void;
}

const LeftComponent: React.FC<LeftComponentProps> = ({onButtonClick}) => {
  const [selectedComponent, setSelectedComponent] =
    useState<string>('component1');

  const handleButtonClick = (componentName: string) => {
    setSelectedComponent(componentName);
    onButtonClick(componentName);
  };

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'component1':
        return <Informacao />;
      case 'component2':
        return <Consulta />;
      case 'component3':
        return <Ocorrencia2 />;
      default:
        return null;
    }
  };

  useEffect(() => {
    onButtonClick(selectedComponent);
  }, [selectedComponent]);

  return (
    <div>
      <div className="bg-[#a38e59] p-3 rounded-md flex justify-center items-center">
        <button
          onClick={() => handleButtonClick('component1')}
          className={`mx-2 font-semibold ${
            selectedComponent === 'component1'
              ? 'py-1 px-4 rounded-lg text-sm bg-red-700 text-white ease-in transition-all duration-200'
              : 'text-white text-sm py-1 px-4 rounded-lg'
          }`}
        >
          Informação
        </button>
        <button
          onClick={() => handleButtonClick('component2')}
          className={`mx-2 font-semibold ${
            selectedComponent === 'component2'
              ? 'py-1 px-4 rounded-lg text-sm bg-red-700 text-white ease-in transition-all duration-200'
              : 'text-white text-sm py-1 px-4 rounded-lg'
          }`}
        >
          Consulta
        </button>
        <button
          onClick={() => handleButtonClick('component3')}
          className={`mx-2 font-semibold ${
            selectedComponent === 'component3'
              ? 'py-1 px-4 rounded-lg text-sm bg-red-700 text-white ease-in transition-all duration-200'
              : 'text-white text-sm py-1 px-4 rounded-lg'
          }`}
        >
          Ocorrência
        </button>
      </div>

      {renderSelectedComponent()}
    </div>
  );
};

export default LeftComponent;
