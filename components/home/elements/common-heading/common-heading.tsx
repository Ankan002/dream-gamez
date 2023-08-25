interface Props {
    title: string;
}

const CommonHeading = (props: Props) => {
    const { title } = props;

    return (
        <h2 className="text-center text-3xl font-oxanium font-medium text-primary-dark tracking-wide">
            {title}
        </h2>
    );
};

export default CommonHeading;
