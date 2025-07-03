import { FC, JSX } from "react";
import {
  SupermarketIcon,
  DiamondIcon,
  MakeupIcon,
  AlcoholIcon,
  ClothesIcon,
  VacationIcon,
  PizzaIcon,
  TaxiIcon,
  AnimalsIcon,
  GymIcon,
  RestaurantIcon,
  ConsultationIcon
} from "./icons";

interface CategoryItemProps {
  title: string;
  icon: string;
}

const iconsMap: Record<string, FC<{ className?: string }>> = {
  supermarket: SupermarketIcon,
  diamond: DiamondIcon,
  makeup: MakeupIcon,
  alcohol: AlcoholIcon,
  clothes: ClothesIcon,
  vacation: VacationIcon,
  pizza: PizzaIcon,
  taxi: TaxiIcon,
  animals: AnimalsIcon,
  gym: GymIcon,
  restaurant: RestaurantIcon,
  consultation: ConsultationIcon,
};

export const CategoryItem = ({ title, icon }: CategoryItemProps): JSX.Element => {
  const IconComponent = iconsMap[icon];

  return (
    <div className="flex flex-col items-center md:min-w-[78px]">
        <IconComponent className="w-10 h-10 lg:w-16 lg:h-16" />
      <span className="text-xs md:text-xl text-center text-[#16254F] font-medium whitespace-nowrap">
        {title}
      </span>
    </div>
  );
};
