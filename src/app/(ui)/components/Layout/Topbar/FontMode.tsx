import { dynamicFont } from "@/app/api/data";
import { useData } from "@/app/context/DataContext";

export const FontMode = () => {
  const { setFontSize, fontSize } = useData();
  const changeFont = (size: number) => {
    setFontSize(size);
  };

  return (
    <div>
      {
        <select
          onChange={(e) => changeFont(Number(e.target.value))}
          className="px-2 py-2 rounded-lg border border-primary bg-white shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-secondary w-28 cursor-pointer"
        >
          <option value={16}>{fontSize === 18 || fontSize === 20 || fontSize === 22 || fontSize === 24 || fontSize === 26 ? "Default size" : "Text size"}</option>
          {dynamicFont?.map((item: any, index: number) => (
            <option key={index} value={item.value}>
              {item.key}
            </option>
          ))}
        </select>
      }
    </div>
  )
}