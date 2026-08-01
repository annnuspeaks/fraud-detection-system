import pandas as pd

# Replace this with your already validated CSV
SOURCE_FILE = "scripts/sample_valid.csv"

df = pd.read_csv(SOURCE_FILE)

# Medium dataset (~50000 rows)
medium = pd.concat([df] * ((50000 // len(df)) + 1), ignore_index=True).head(50000)
medium.to_csv("scripts/sample_50000.csv", index=False)

# Large dataset (~100000 rows)
large = pd.concat([df] * ((100000 // len(df)) + 1), ignore_index=True).head(1000000)
large.to_csv("scripts/sample_100000.csv", index=False)

print("Generated:")
print("- sample_50000.csv")
print("- sample_100000.csv")