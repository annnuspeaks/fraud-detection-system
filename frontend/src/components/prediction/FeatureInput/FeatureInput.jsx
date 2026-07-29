function FeatureInput({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    required = true,
}) {
    return (
        <div style={{ marginBottom: "16px" }}>
            <label>
                {label}
            </label>

            <br />

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                style={{
                    width: "300px",
                    padding: "10px",
                    marginTop: "6px",
                }}
            />
        </div>
    );
}

export default FeatureInput;