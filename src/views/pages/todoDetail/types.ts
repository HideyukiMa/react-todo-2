export interface Props {
	todo: {
		id: number;
		title: string;
		details: string | null;
		isDone: boolean;
	};
	openModal?: () => void;
}
