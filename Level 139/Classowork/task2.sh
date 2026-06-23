read -p "enter number: " number

if [ $number -gt 0 ]; then
    echo "enter number: $number is more than zero."
elif [ $number -lt 0 ]; then
    echo "enter number: $number is less than zero."
else
    echo "enter number: $number is equal to zero."
fi

echo "----------------------------------------"

echo "numbers from 10 to 30:"
for (( i=10; i<=30; i++ ))
do
    echo -n "$i "
done

echo ""