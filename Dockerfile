FROM maven:3.9.9-eclipse-temurin-21 AS build

WORKDIR /workspace

COPY pom.xml .
RUN mvn -B -q -DskipTests dependency:go-offline

COPY src src
RUN mvn -B -q -DskipTests clean package

FROM eclipse-temurin:21-jre-jammy

WORKDIR /app

RUN useradd --system --uid 1001 appuser

COPY --from=build /workspace/target/Poker-Dice-0.0.1-SNAPSHOT.jar app.jar

USER appuser

EXPOSE 8080

ENTRYPOINT ["java", "-XX:+UseSerialGC", "-XX:MaxRAMPercentage=75.0", "-jar", "app.jar"]
