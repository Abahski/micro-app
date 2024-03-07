import { ChangeEvent } from "react";

export type Props = {
	options: string[];
	onChange: (e: ChangeEvent<HTMLSelectElement>) => any;
} 

function SelectInput(props: Props) {
	const { options, onChange } = props;

	return (
		<select id="selectInput"
		name="gender"
		onChange={onChange}
		className="mt-1 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
			{options.map(option => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	)
} 	

export default SelectInput;
