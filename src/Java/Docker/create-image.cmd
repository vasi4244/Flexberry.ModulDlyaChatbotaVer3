docker build --no-cache -f SQL\Dockerfile.PostgreSql -t modul_dlya_chatbota_ver3-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t modul_dlya_chatbota_ver3-java/app ../../..
