import { useState } from "react";

export const useGameCard = () => {
	const [isGameInfoModalOpen, setIsGameInfoModalOpen] =
		useState<boolean>(false);

	const toggleModalState =
		(
			modalStateSetter: React.Dispatch<React.SetStateAction<boolean>>,
			newState: boolean
		) =>
		() => {
			modalStateSetter(newState);
		};

	return {
		isGameInfoModalOpen,
		openGameInfoModal: toggleModalState(setIsGameInfoModalOpen, true),
		closeGameInfoModal: toggleModalState(setIsGameInfoModalOpen, false),
	};
};
