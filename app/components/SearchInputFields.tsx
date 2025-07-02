import { JSX } from "react";
import InputField from "./InputField";
import { IoLocationSharp } from "react-icons/io5";
import { FaMicrophone } from 'react-icons/fa';
import { BsPersonFill } from "react-icons/bs";



interface SearchInputFieldsProps {
    activeTab: string;
  }
  
  export const SearchInputFields = ({ activeTab }: SearchInputFieldsProps): JSX.Element => {
    return (
      <div className={`flex flex-col ${activeTab === 'people' ? 'gap-4' : 'gap-0'}`}>
        {activeTab === "people" ? (
          <>
            <InputField
              type="text"
              placeholder="חיפוש אנשים לדוגמה: אבי כהן"
              icon={<BsPersonFill />}
            />
            <InputField
              type="text"
              placeholder="אזור בארץ לדוגמה: תל אביב"
              icon={<IoLocationSharp />}
            />
          </>
        ) : (
          <>
            <InputField
              type="text"
              placeholder="לדוגמה: אינסטלטורים בתל אביב"
              icon={<FaMicrophone className="text-amber-600" />}
            />
          </>
        )}
      </div>
    );
  };
  