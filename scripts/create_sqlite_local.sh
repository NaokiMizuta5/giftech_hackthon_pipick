migration_files=$(ls -1 src/migrations/*.sql | sort -n)
echo "Creating local.db"
for file in $migration_files; do
    echo "Applying $file"
    sqlite3 local.db < $file
done

echo "Done"
