import pytest

from app.main import app, health


def test_health_route_is_registered() -> None:
    route_paths = {getattr(route, "path", None) for route in app.routes}

    assert "/health" in route_paths


@pytest.mark.asyncio
async def test_health_endpoint_returns_ok() -> None:
    assert await health() == {"status": "ok"}
